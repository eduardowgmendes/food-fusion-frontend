import { Avatar, Button, Card, Col, Flex, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

export default function SellerCard({ backdrop, icon, title, description, action }) {
    return (
        <Card style={{
            background: backdrop ? `url(${backdrop})` : null,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Avatar icon={icon} size={'large'} />
                </Col>
                <Col span={24}>
                    <Flex vertical>
                        {title && (
                            <Title level={2} ellipsis={{ rows: 3, expandable: false, symbol: '...' }}>
                                {title}
                            </Title>
                        )}
                        {description && (
                            <Paragraph>
                                {description}
                            </Paragraph>
                        )}
                    </Flex>
                </Col>
                <Col span={24}>
                    <Button size="large" type="primary" shape="square">{action.label}</Button>
                </Col>
            </Row>
        </Card >
    )
}