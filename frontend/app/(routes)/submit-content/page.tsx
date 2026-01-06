import {submitArticle} from "./actions"

export default function SubmitContentPage() {
	return (
		<main className="mx-auto max-w-xl px-4 py-12">
			<h1 className="mb-6 text-2xl font-semibold">Indsend artikel</h1>
			<p className="mb-8 text-sm text-gray-600">
				Udfyld titel og tekst herunder. Når du trykker &quot;Submit&quot;, bliver der
				oprettet et kladdedokument i Sanity, som du efterfølgende kan redigere
				og udgive i studiet.
			</p>

			<form action={submitArticle} className="space-y-6">
				<div>
					<label htmlFor="title" className="mb-1 block text-sm font-medium">
						Titel
					</label>
					<input
						id="title"
						name="title"
						required
						className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
					/>
				</div>

				<div>
					<label htmlFor="body" className="mb-1 block text-sm font-medium">
						Brødtekst
					</label>
					<textarea
						id="body"
						name="body"
						required
						rows={8}
						className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
					/>
				</div>

				<button
					type="submit"
					className="inline-flex rounded bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900"
				>
					Submit
				</button>
			</form>
		</main>
	)
}

