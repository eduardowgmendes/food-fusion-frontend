import { Empty, Flex, Layout } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

export default function PanelPage(props) {

    const page = {
        title: 'Page Title',
        description: 'Page Description',
        contents: (
            <Layout>
                <Empty description='No Page Content' />
            </Layout>)
    }

    return (
        <Layout>
            <Flex vertical gap={'large'} flex={1}>
                <Flex vertical gap={'middle'}>
                    <Title>{props.title}</Title>
                    <Paragraph>{props.description}</Paragraph>
                </Flex>
                <Flex flex={1}>
                    {props.contents}
                </Flex>
            </Flex>
        </Layout>)
}