import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography } from 'antd';
import { useGetCryptoExchangesQuery } from '../../services/cryptoExchangeApi';
// import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetCryptoExchangesQuery();
  const exchanges = [];
  const exchangesList = data?.filter((exchange) => {
    if (exchange.description && exchange.adjusted_rank) {
      if (exchange.description.length > 50 && exchange.adjusted_rank < 100) {
        exchanges.push(exchange);
      }
    }
  });

  if (isFetching) return 'loading';

  return (
    <React.Fragment>
      <Row className='collapse-title-container'>
        <Col span={6}>Name</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Rank</Col>
      </Row>
      <Row>
        {exchanges.map((exchange) => (
          <Col span={24} key={exchange.id}>
            <Collapse>
              <Panel
                showArrow={false}
                style={{ width: '100%' }}
                className='collapse-header-container'
                header={
                  <Row>
                    <Col span={6}>{exchange.name}</Col>
                    {/* <Col span={6}>{exchange.currencies}</Col> */}
                    <Col span={6}>
                      ${millify(exchange.quotes.USD.adjusted_volume_24h)}
                    </Col>
                    <Col span={6}>{exchange.markets}</Col>
                    <Col span={6}>{exchange.adjusted_rank}</Col>
                  </Row>
                }
              >
                {exchange.description}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};
export default Exchanges;
