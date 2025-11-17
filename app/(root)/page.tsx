import TradingViewWidget from "@/components/TradingViewWidget";
import {
  HEATMAP_WIDGET_CONFIG,
  MARKET_OVERVIEW_WIDGET_CONFIG,
  TOP_STORIES_WIDGET_CONFIG,
  MARKET_DATA_WIDGET_CONFIG,
  HEATMAP_WIDGET_URL,
  MARKET_DATA_WIDGET_URL,
  MARKET_OVERVIEW_WIDGET_URL,
  TOP_STORIES_WIDGET_URL,
} from "@/lib/constants";

const Home = () => {
  return (
    <div className="home-wrapper">
      <section className="home-section">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-5 md:col-span-2">
            <TradingViewWidget
              scriptURL={MARKET_OVERVIEW_WIDGET_URL}
              config={MARKET_OVERVIEW_WIDGET_CONFIG}
              height={600}
              title="Market Overview"
            />
          </div>
          <div className="col-span-5 md:col-span-3">
            <TradingViewWidget
              scriptURL={HEATMAP_WIDGET_URL}
              config={HEATMAP_WIDGET_CONFIG}
              height={600}
              title="Most Popular Stocks"
            />
          </div>
          <div className="col-span-5 md:col-span-2">
            <TradingViewWidget
              scriptURL={TOP_STORIES_WIDGET_URL}
              config={TOP_STORIES_WIDGET_CONFIG}
              height={600}
              title="Top Stories"
            />
          </div>
          <div className="col-span-5 md:col-span-3">
            <TradingViewWidget
              scriptURL={MARKET_DATA_WIDGET_URL}
              config={MARKET_DATA_WIDGET_CONFIG}
              height={600}
              title="Market Data"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
