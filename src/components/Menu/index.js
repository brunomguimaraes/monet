import { ReactComponent as MarketIcon } from '../assets/icons/market-stand.svg';
import { ReactComponent as GiftIcon } from '../assets/icons/gift.svg';
import { ReactComponent as PiggyBankIcon } from '../assets/icons/piggy-bank.svg';

import * as Styled from "./index.styles";

const Menu = () => {
	return (
		<Styled.MenuWrapper>
			<Styled.MenuSection>
				<Styled.MenuItem>
					<MarketIcon width={16} height={16} color="white"/> Grocery list
					<GiftIcon width={16} height={16} color="white"/> Bucket list
					<PiggyBankIcon width={16} height={16} color="white"/> Finances
				</Styled.MenuItem>
			</Styled.MenuSection>

		</Styled.MenuWrapper>
	);
};

export default Menu;
