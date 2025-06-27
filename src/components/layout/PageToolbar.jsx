import { MoreOutlined, ShopFilled, ShopOutlined, ShopTwoTone } from "@ant-design/icons";
import { Avatar, Button, Card, Col, Flex, Grid, Row, Select, Tooltip } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

const { useBreakpoint } = Grid

export default function PageToolbar({ title, description, actions, settings }) {

    const screens = useBreakpoint()

    const handleChange = value => {
        console.log(`selected: ${value}`)
    }

    return (
        <Card variant="borderless" styles={{ body: { padding: 0 } }} style={{ boxShadow: 'none' }}>

            <Flex align="center" gap={screens.xs ? 'small' : 'middle'}>

                <Flex vertical gap={'small'} flex={1}>

                    <Flex align="center" justify="space-between" gap={'large'} flex={1}>

                        <Title level={screens.xs ? 4 : 2} style={{ margin: 0, wordBreak: "keep-all", flex: 1 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>{title}</Title>

                        <Flex align="center" justify="space-between" gap={screens.xs ? 'small' : 'middle'}>

                            {settings ? (<Tooltip title='Configurações'>
                                <Button type="text" shape="square" size="large" icon={<MoreOutlined />} />
                            </Tooltip>) : (null)}

                        </Flex>

                    </Flex>

                    {description && (<Paragraph type="secondary" style={{ margin: 0, wordBreak: "keep-all" }} ellipsis={{ rows: 3, expandable: false, symbol: '...' }}>{description}</Paragraph>)}

                </Flex>

            </Flex>

        </Card>
    )
}