import { Col, Grid, Row } from "antd";

export default function Container() {
    return (
        <Grid>
            <Row gutter={16}>
                <Col
                    xs={{ span: 24, offset: 0 }}
                    sm={{ span: 24, offset: 0 }}
                    md={{ span: 12, offset: 12 }}
                    lg={{ span: 12, offset: 12 }}
                    xl={{ span: 12, offset: 12 }}
                    xxl={{ span: 12, offset: 12 }}>
                        
                </Col>
            </Row>
        </Grid>
    )
}