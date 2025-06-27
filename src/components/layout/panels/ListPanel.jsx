import { Empty, Flex, Layout, Splitter } from "antd";
import PanelPage from "./pages/PanelPage";

export default function ListPanel() {

    const items = [{
        title: 'Page Title',
        description: 'Page Description',
        contents: (
            <Layout>
                <Empty description='No Page Content' />
            </Layout>)
    }]

    return (
        <Flex vertical gap={'large'} flex={1}>
            <Splitter>
                <Splitter.Panel defaultSize={'32%'} min={'32%'} max={'42%'}>
                        
                </Splitter.Panel>
                <Splitter.Panel>
                    <PanelPage />
                </Splitter.Panel>
            </Splitter>
        </Flex>
    )
}