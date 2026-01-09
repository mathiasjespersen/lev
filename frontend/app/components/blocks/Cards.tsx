import Visual from "@/app/components/Visual";
import type { DereferencedVisual } from "@/sanity/lib/types";
import Card from "@/app/components/Card";
import type { Card as CardType } from "@/sanity.types"
import Button from "../Button";

const dummyImage={_type:"visual",image:{_type:"image",asset:{_createdAt:"2026-01-05T19:30:28Z",_id:"image-8b21aa9528f662e249b8ad9c77c963cfd15f4aab-1456x1292-jpg",_originalId:"image-8b21aa9528f662e249b8ad9c77c963cfd15f4aab-1456x1292-jpg",_rev:"wkremWJk4u09Vf83enFNlO",_type:"sanity.imageAsset",_updatedAt:"2026-01-05T19:30:28Z",assetId:"8b21aa9528f662e249b8ad9c77c963cfd15f4aab",extension:"jpg",metadata:{_type:"sanity.imageMetadata",blurHash:"eLHB[GJPa1%5s;HXT0-=VrohMbMwMwofnN.At7ROWoaJV?s:o#WBt7",dimensions:{_type:"sanity.imageDimensions",aspectRatio:1.1269349845201238,height:1292,width:1456},hasAlpha:!1,isOpaque:!0,lqip:"data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAASABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAUGBwME/8QAJRAAAgEDAwQCAwAAAAAAAAAAAQIDAAQFERIhBhMiURUxQWGB/8QAFwEAAwEAAAAAAAAAAAAAAAAAAgMEAf/EACARAAEEAQQDAAAAAAAAAAAAAAEAAgQRAxIhMnEUMUH/2gAMAwEAAhEDEQA/AIrLYq+slnilHcTduB91xsnkZG7jtuJG6NfX7NX+XJ4i/slS7Zi+m0qp50qTl6dw72MJggEaMoO4Hk/2tdBLnksOyLHK0O1OHarWKsr+eyR7OFVh+gNfzSvFncm+HyDWdjM6QIo0ANKAx8QNG7VPlZDu2qVa6L889EH8h3Po81tMgA1AHAHApSqYXzpRyeR7WSdYgfPT8eqUpSn8imN9Bf/Z",palette:{_type:"sanity.imagePalette",darkMuted:{_type:"sanity.imagePaletteSwatch",background:"#50553c",foreground:"#fff",population:7.99,title:"#fff"},darkVibrant:{_type:"sanity.imagePaletteSwatch",background:"#624522",foreground:"#fff",population:.5,title:"#fff"},dominant:{_type:"sanity.imagePaletteSwatch",background:"#cddbf9",foreground:"#000",population:9.2,title:"#000"},lightMuted:{_type:"sanity.imagePaletteSwatch",background:"#9da9c7",foreground:"#000",population:7.43,title:"#fff"},lightVibrant:{_type:"sanity.imagePaletteSwatch",background:"#cddbf9",foreground:"#000",population:9.2,title:"#000"},muted:{_type:"sanity.imagePaletteSwatch",background:"#9e6d60",foreground:"#fff",population:5.46,title:"#fff"},vibrant:{_type:"sanity.imagePaletteSwatch",background:"#548cb4",foreground:"#fff",population:0,title:"#fff"}}},mimeType:"image/jpeg",originalFilename:"temp.jpg",path:"images/isulquck/production/8b21aa9528f662e249b8ad9c77c963cfd15f4aab-1456x1292.jpg",sha1hash:"8b21aa9528f662e249b8ad9c77c963cfd15f4aab",size:299609,uploadId:"Jl6FJKb9uTwA174pjRDCHuL8jL1qEltQ",url:"https://cdn.sanity.io/images/isulquck/production/8b21aa9528f662e249b8ad9c77c963cfd15f4aab-1456x1292.jpg"}},mediaType:"image",video:{_type:"mux.video",asset:{data:{aspect_ratio:"16:9"},playbackId:"JyVvEIUh1Rk16X02h02umO3FcgTruxTU9p7wRNFjaQTa00"}}} as DereferencedVisual;

const dummyCard={_type:"card",title:"Dummy Card",excerpt:"This is a dummy card for testing purposes.",link:{_type:"link",linkType:"href",href:"https://example.com",openInNewTab:true},visual:dummyImage} as CardType;

export default function Cta() {
  return (
    <div className="col-span-12 lev-subgrid">
      <div className="col-span-12 mb-8 flex flex-row justify-between items-center">
        <h2 className="lev-heading-xl text-blue-700">Følg med</h2>
        <Button color="gray" size="small">Flere updates</Button>
      </div>
      <div className="col-span-3">
          <Card block={dummyCard} />
      </div>
      <div className="col-span-3">
          <Card block={dummyCard} />
      </div>
      <div className="col-span-3">
          <Card block={dummyCard} />
      </div>
      <div className="col-span-3">
          <Card block={dummyCard} />
      </div>
    </div>
  )
}
