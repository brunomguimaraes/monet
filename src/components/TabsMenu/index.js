import { ReactComponent as MarketIcon } from '../assets/icons/market-stand.svg';
import { ReactComponent as GiftIcon } from '../assets/icons/gift.svg';
import { ReactComponent as PiggyBankIcon } from '../assets/icons/piggy-bank.svg';

import { mainColors } from "../../style/colors";

import * as Styled from "./index.styles";

const TabsMenu = () => {
	//todo: map menu items
	return (
		<Styled.MenuWrapper>
			<Styled.MenuSection>
				<Styled.MenuItem selected>
					<MarketIcon width={16} height={16} color={mainColors.white} /> Grocery list
				</Styled.MenuItem>
				<Styled.MenuItem>
					<GiftIcon width={16} height={16} color={mainColors.lightGray} /> Bucket list
				</Styled.MenuItem>
				<Styled.MenuItem>
					<PiggyBankIcon width={16} height={16} color={mainColors.lightGray} /> Finances
				</Styled.MenuItem>
			</Styled.MenuSection>

		</Styled.MenuWrapper>
	);
};

export default TabsMenu;
