import { Column, Line } from "@ant-design/charts";
import { Col, Flex, Row, Select } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import Section from "../layout/Section";

export default function EstablishmentDashboardView(props) {

    const yearIncreasingValueData = [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 }
    ]

    const frequenciesData = [{ letter: "A", frequency: 0.08167 }, { letter: "B", frequency: 0.01492 }, { letter: "C", frequency: 0.02782 }, { letter: "D", frequency: 0.04253 }, { letter: "E", frequency: 0.12702 }, { letter: "F", frequency: 0.02288 }, { letter: "G", frequency: 0.02015 }, { letter: "H", frequency: 0.06094 }, { letter: "I", frequency: 0.06966 }, { letter: "J", frequency: 0.00153 }, { letter: "K", frequency: 0.00772 }, { letter: "L", frequency: 0.04025 }, { letter: "M", frequency: 0.02406 }, { letter: "N", frequency: 0.06749 }, { letter: "O", frequency: 0.07507 }, { letter: "P", frequency: 0.01929 }, { letter: "Q", frequency: 0.00095 }, { letter: "R", frequency: 0.05987 }, { letter: "S", frequency: 0.06327 }, { letter: "T", frequency: 0.09056 }, { letter: "U", frequency: 0.02758 }, { letter: "V", frequency: 0.00978 }, { letter: "W", frequency: 0.0236 }, { letter: "X", frequency: 0.0015 }, { letter: "Y", frequency: 0.01974 }, { letter: "Z", frequency: 0.00074 }]

    const lineChartConfig = {
        data: yearIncreasingValueData,
        xField: 'year',
        yField: 'value',
        theme: { type: props.theme },
        point: {
            shapeField: 'circle',
            sizeField: 4,
        },
        interaction: {
            tooltip: {
                marker: false,
            },
        }, style: {
            lineWidth: 2,
        },
    };

    const barChartConfig = {
        data: frequenciesData,
        xField: 'letter',
        yField: 'frequency',
        theme: { type: props.theme },
        label: {
            text: (d) => `${(d.frequency * 100).toFixed(1)} %`,
            textBaseline: 'bottom',
        },
        axis: {
            y: {
                labelFormatter: '.0%'
            },
        },
        style: {
            radiusTopLeft: 10,
            radiusTopRight: 10,
        }
    };

    return (
        <Flex vertical gap={'large'}>

            <Row gutter={[16, 16]}>

                <Col span={24}>
                    <Flex align="start" flex={1} gap={'middle'} style={{ width: '100%', minHeight: 128 }}>
                        <Flex vertical flex={1}>
                            <Title level={2} style={{ margin: 0 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>{props.establishment.name}</Title>
                            <Paragraph type="secondary" style={{ margin: 0 }} ellipsis={{ rows: 6, expandable: true, symbol: 'Ver mais.' }}>{props.establishment.description}</Paragraph>
                        </Flex>
                        <Select style={{ minWidth: 128 }} size="large" defaultValue={'today'} options={[
                            { value: 'today', label: 'Hoje' },
                            { value: 'yesterday', label: 'Ontem' },
                            { value: 'lastThirtyDays', label: 'Últimos 30 dias' },
                            { value: 'lastSixtyDays', label: 'Últimos 60 dias' }]} />
                    </Flex>
                </Col>

                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }}>
                    <Section title={'Volume de Pedidos'} description={'Demonstra o desempenho das vendas através de canais externos'} helper={{ tooltip: '' }} contents={
                        <Line {...lineChartConfig} />
                    } />
                </Col>

                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }}>
                    <Section title={'Frequencias'} description={'Demonstra o desempenho das vendas através de canais externos'} helper={{ tooltip: '' }} contents={
                        <Column {...barChartConfig} />
                    } />
                </Col>

                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }}>
                    <Section title={'Outras Métricas'} description={'Demonstra o desempenho das vendas através de canais externos'} helper={{ tooltip: '' }} contents={
                        <Column {...barChartConfig} />
                    } />
                </Col>

            </Row>

        </Flex>
    )
}