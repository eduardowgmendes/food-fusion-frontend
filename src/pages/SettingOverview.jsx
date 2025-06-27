import { ArrowLeftOutlined, LeftOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Flex, Layout, Tooltip } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

export default function SettingOverview({ title, description, breadcrumb }) {
    return (
        <Layout>
            <Flex vertical gap={'large'}>
                <Flex vertical gap={'middle'} align="start">
                    <Flex align="center" gap={'small'}>
                        <Tooltip title='Voltar'>
                            <Button shape="square" type="text" icon={<ArrowLeftOutlined />} />
                        </Tooltip>
                        <Title level={3} style={{ margin: 0 }}>{title}</Title>
                    </Flex>

                    <Flex vertical gap={'large'} flex={1}>
                        <Paragraph type="secondary" style={{ margin: 0 }}>{description}</Paragraph>
                        {breadcrumb && (<Breadcrumb items={breadcrumb.items} />)}
                    </Flex>
                </Flex>
            </Flex>
        </Layout>
    )
} 