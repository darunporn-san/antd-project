import React, { useEffect, useState } from "react";
import { Modal, Switch, Card, Button } from "antd";

const CustomModal: React.FC<any> = (props) => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	useEffect(() => {
		setIsModalVisible(props.visible);
	}, [props.visible]);
	return (
		<Modal title={null} visible={isModalVisible} footer={null} closable={false}>
			<div className="type-course">
				<h3>
					<b>{props.title}</b>
				</h3>
				<div>
					<Button danger type="text" onClick={handleCancel}>
						ยกเลิก
					</Button>
					<Button type="primary" onClick={props.submitTypeCourse}>
						บันทึก
					</Button>
				</div>
			</div>
			<div>{props.children}</div>

			{/* <p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p> */}
		</Modal>
		// <>
		// 	<div>
		// 		<div>สร้างหมวดหมู่</div>
		// 		<div>
		// 			<Button type="primary">Certificate</Button>
		// 			<Button type="primary">Certificate</Button>
		// 		</div>
		// 	</div>
		// 	<div></div>
		// </>
	);
};
export default CustomModal;
