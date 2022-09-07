import { Alert } from "antd";

function ErrorBox  ({title, message}) {

    return (
<Alert  message={title}
      description={message}
      type="error"
      closable>
</Alert>

    )
}

export default ErrorBox;