import { Segmented, Row, Col, Card } from "antd";
import CardDashboard from "../../components/app/card-dashboard";
import Header from "../../components/layout/header";

const SystemDashboard: any = () => {
	return (
		<div>
			<Header />
			<div className="content">
				<Segmented
					block
					options={["ใบรับรอง", "หลักสูตร", "บทเรียน"]}
					defaultValue={"บทเรียน"}
				/>
				<h2>
					<b>แดชบอร์ด</b>
				</h2>
				<h6>สถานะการตรวจสอบ</h6>
				<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
					<Col className="gutter-row" span={6}>
						<CardDashboard />
					</Col>
					<Col className="gutter-row" span={6}>
						<CardDashboard />
					</Col>
					<Col className="gutter-row" span={6}>
						<CardDashboard />
					</Col>
					<Col className="gutter-row" span={6}>
						<CardDashboard />
					</Col>
				</Row>
				<Card style={{ marginTop: "20px" }} />
				<Card style={{ marginTop: "20px" }} />
			</div>
		</div>
	);
};
export default SystemDashboard;
