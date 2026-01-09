import Button from "@/app/components/Button";

export default function Entry() {
  return (
    <div className="col-span-12 lev-subgrid">
        <div className="col-span-6 col-start-4">
            <h2 className="lev-heading-xl block text-center text-blue-700">Få hjælp</h2>
            <div className="lev-text-lg mt-6">
                <p>Dyk ned i de forskellige tilbud om støtte og hjælp til mennesker med udviklingshandicap og deres familier. Du kan også finde hjælp hvis du er fagperson der arbejder med udviklingshandicap.</p>
            </div>
            <div className="mt-10 flex flex-col gap-6">
                <Button color="blue" size="large" arrow={true}>For dig med udviklingshandicap</Button>
                <Button color="light-blue" size="large" arrow={true}>For dig der er tæt på eller i familie</Button>
                <Button color="gray" size="large" arrow={true}>For dig der arbejder med udviklingshandicap</Button>
                <Button color="yellow" size="large" arrow={true}>For dig der arbejder med udviklingshandicap</Button>
            </div>
        </div>
    </div>
  )
}
