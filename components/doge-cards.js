import Link from 'next/link'
import { NFTPreview } from "@zoralabs/nft-components";

import { NFT_LIST } from '../lib/constants'

const DogeCard = (props) => {
  return (
    <Link passHref href={`/doge/${props.doge.slug}`}>
      <a className="doge-card_wrapper shadow">
        <div className="doge-card_wrapper-inner">
          <div className="zora-placeHolderInfo">
            <span>Coming Soon</span>
          </div>
          <NFTPreview id={props.doge.id} />
        </div>
      </a>
    </Link>
  )
}

const DogeCards = () => {
  return (
    <>
      {NFT_LIST.map(
        (item, i) => (
          <div className="doge-cards_list-item" key={`${item.id}-${i}`}>
            <DogeCard doge={item} index={i}/>
          </div>
        )
      )}
    </>
  )
}

export default DogeCards
