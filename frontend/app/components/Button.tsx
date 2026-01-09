export default function Button({
    children,
    size = 'small',
    color = 'blue',
    arrow = false,
}: {
    children: React.ReactNode,
    size?: 'small' | 'large',
    color: 'blue' | 'light-blue' | 'gray' | 'yellow'
    arrow?: boolean
}) {
    const sizeClasses = size === 'small' ? 'text-lg px-6 py-3' : size === 'large' ? 'text-xl px-9 py-6.5' : ''

    const colorClasses = color === 'blue' ? 'bg-blue-700 text-white' :
        color === 'light-blue' ? 'bg-blue-200 text-blue-700' :
        color === 'gray' ? 'bg-gray-50 text-blue-700' :
        color === 'yellow' ? 'bg-yellow-200 text-blue-700' : ''

    return (
        <button className={`transition-opacity duration-300 hover:opacity-80 rounded-full text-left font-medium flex flex-row justify-between items-center cursor-pointer group ${colorClasses} ${sizeClasses}`}>
            {children}

            {arrow && (
            <svg className={`left-0 group-hover:left-1.5 relative transition-all duration-150 ${color && color == 'blue' ? 'fill-white' : 'fill-blue-700'}`} width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.00390625 5.2984H10.0872V4.8584C9.80613 4.68729 9.5678 4.51618 9.37224 4.34507C9.17668 4.16173 8.98724 3.98451 8.80391 3.8134L6.64057 1.65007L8.29057 6.83069e-05L14.8356 6.54507L8.29057 13.0901L6.64057 11.4401L8.80391 9.27673C8.98724 9.0934 9.17668 8.91618 9.37224 8.74507C9.5678 8.57396 9.80613 8.40285 10.0872 8.23173V7.79173H0.00390625V5.2984Z"/>
            </svg>
            )}

        </button>
    )
}
