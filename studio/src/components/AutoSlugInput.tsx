import {useCallback, useEffect} from 'react'
import {set, unset} from 'sanity'
import {SlugInput, SlugInputProps, useFormValue} from 'sanity'

export function AutoSlugInput(props: SlugInputProps) {
  const {onChange, schemaType, readOnly} = props
  const source = schemaType.options?.source as string
  const sourceValue = useFormValue([source]) as string | undefined
  const currentSlug = useFormValue(['slug']) as {current?: string} | undefined

  const updateSlug = useCallback(() => {
    if (!sourceValue) {
      onChange(unset())
      return
    }

    // Generate slug from source value
    const slugValue = sourceValue
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '')

    if (slugValue) {
      onChange(set({_type: 'slug', current: slugValue}))
    }
  }, [sourceValue, onChange])

  // Auto-update slug when source value changes
  useEffect(() => {
    if (sourceValue && !readOnly) {
      // Auto-generate whenever source value changes (only if not read-only)
      updateSlug()
    }
  }, [sourceValue, readOnly, updateSlug])

  return <SlugInput {...props} />
}
