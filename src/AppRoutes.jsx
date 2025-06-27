import { HomeFilled, LoadingOutlined } from "@ant-design/icons"
import { Button, Flex, Result } from "antd"
import Paragraph from "antd/es/typography/Paragraph"
import { lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SettingOverview from "./pages/SettingOverview";
import HelpCenter from "./pages/HelpCenter";
import EstablishmentOverview from "./pages/EstablishmentOverview";

const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Establishments = lazy(() => import("./pages/Establishments"));
const OrderCentral = lazy(() => import("./pages/OrdersCentral"));
const Settings = lazy(() => import("./pages/Settings"));
const OrderOverview = lazy(() => import("./pages/OrderOverview"));

const AppRoutes = (props) => {
    return (
        <Router>
            <Suspense fallback={
                <Flex vertical>
                    <Flex vertical align="center" gap={'small'}>
                        <LoadingOutlined />
                        <Paragraph type="secondary">Carregando...</Paragraph>
                    </Flex>
                </Flex>
            }>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard theme={props.theme} />} />
                    <Route path="/establishments" element={<Establishments establishments={null} />} />
                    <Route path="/establishments/:id" element={<EstablishmentOverview />} />
                    <Route path="/orders" element={<OrderCentral />} />
                    <Route path="/orders/:id" element={<OrderOverview theme={props.theme}/>} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/help" element={<HelpCenter />} />
                    <Route path="/settings/establishment-settings" element={<SettingOverview title={'Dados do Estabelecimento'} description={''} />} />
                    <Route path="*" element={<Result status={'404'} title={'Oops! Página não encontrada.'} extra={<Button type="default" icon={<HomeFilled />} onClick={() => location.href = '/'}>Página Inicial</Button>} />} />
                </Routes>
            </Suspense>
        </Router>
    )
}

export default AppRoutes