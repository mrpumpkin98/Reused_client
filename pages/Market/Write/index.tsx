//####################################################################
//
// MARKET_WRITE MAIN
//
//####################################################################

import MarketWrite from "../../../src/components/units/market/write/MarketWrite.container";

export default function GraphqlMutationPage() {
  return (
    <div>
      <MarketWrite isEdit={false} />
    </div>
  );
}