import { useLocation } from 'react-router-dom'

import { ReactComponent as MarketIcon } from 'assets/icons/market-stand.svg';
import { ReactComponent as GiftIcon } from 'assets/icons/gift.svg';
import { ReactComponent as PiggyBankIcon } from 'assets/icons/piggy-bank.svg';

import { mainColors } from "style/colors";

import * as Styled from "./index.styles";

const TabsMenu = () => {
	const location = useLocation();
  console.log('=>', location.pathname);
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
