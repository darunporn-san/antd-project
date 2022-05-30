import { Card } from "antd";
import { SmileOutlined } from "@ant-design/icons";
const CardDashboard = () => {
	return (
		<>
			<Card>
				<div className="card-total">
					<div className="icon-card">
						<SmileOutlined
							style={{ fontSize: "48px", padding: "10px" }}
							color={"#093B5C"}
						/>
					</div>
					<div>
						<h1>1000</h1>
						<h6>จำนวนผู้เรียนทั้งหมด</h6>
					</div>
				</div>
			</Card>
		</>
	);
};
export default CardDashboard;
