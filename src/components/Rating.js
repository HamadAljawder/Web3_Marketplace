import {Radio, Rate,  Space} from 'antd'
import { CoffeeOutlined } from '@ant-design/icons';

function Rating({rating, setRating}) {
  return (
    <>
    <h2>
        Coffee Score (SCAA Scale)
    </h2>
    <Radio.Group value={rating} onChange={(value)=> setRating(value.target.value)}>
        <Space direction="vertical">
          <Radio value={5}><Rate style={{ color: '#63341f' }} character={<CoffeeOutlined />} defaultValue={5} disabled={true}></Rate></Radio>
          <Radio value={4}><Rate style={{ color: '#63341f' }} character={<CoffeeOutlined />} defaultValue={4} disabled={true}></Rate></Radio>
          <Radio value={3}><Rate style={{ color: '#63341f' }} character={<CoffeeOutlined />} defaultValue={3} disabled={true}></Rate></Radio>
          <Radio value={2}><Rate style={{ color: '#63341f' }} character={<CoffeeOutlined />} defaultValue={2} disabled={true}></Rate></Radio>
          <Radio value={1}><Rate style={{ color: '#63341f' }} character={<CoffeeOutlined />} defaultValue={1} disabled={true}></Rate></Radio>
        </Space>
    </Radio.Group>
    <br />
    <br />
    </>
  )
}

export default Rating