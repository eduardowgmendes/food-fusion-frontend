import { QuestionCircleOutlined } from "@ant-design/icons";
import { Button, Card, Empty, Flex, Tooltip } from "antd";

export default function DashCard({ data, helper, contents }) {
    return (
        <Card variant="borderless" size="small" title={data.title} extra={<Tooltip title={helper.tooltip}><Button type="text" shape="circle" icon={<QuestionCircleOutlined />} /></Tooltip>}>
            <Flex>
                {contents ? (contents) : (<Flex align="center" justify="center" style={{ padding: '1rem', width: '100%' }}><Empty description='Sem Dados' /></Flex>)}
            </Flex>
        </Card>
    )
}