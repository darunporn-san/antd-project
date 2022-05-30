import { Form, Input, Switch, Radio } from "antd";

const FormTypeCourse = () => {
	const [form] = Form.useForm();

	return (
		<>
			<Form form={form} layout="vertical" style={{ marginTop: "20px" }}>
				<Form.Item label="ชื่อหมวดหมู่" required>
					<Input />
				</Form.Item>
				<Form.Item label="รายละเอียด / คำอธิบาย">
					<Input.TextArea />
				</Form.Item>
				<Form.Item name="switch" valuePropName="checked">
					<div className="switch-status">
						<label style={{ paddingRight: "1em" }}>สถานะการใช้งาน</label>
						<Switch />
						<label style={{ paddingLeft: "1em" }}>เปิดใช้งาน</label>
					</div>
				</Form.Item>
			</Form>
		</>
	);
};
export default FormTypeCourse;
