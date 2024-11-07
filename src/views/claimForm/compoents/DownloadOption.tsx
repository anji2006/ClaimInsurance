import { Modal } from "antd";
import { FaCircleExclamation } from "react-icons/fa6";
import { useClaimContext } from "../../../store/claimContext";
import { downloadObject, formatData } from "../../../utils/functions";

interface IProps {
  onReset: () => void
}

function DownloadOption({onReset}: IProps) {
  const [modal, contextHolder] = Modal.useModal();

  const {claimData} = useClaimContext();

  const onClickDownload = (type: 'txt' | 'json') => {
    const formattedData = formatData(claimData);
    downloadObject(formattedData, "claim-data", type);
    modal.success({
      title: 'Success',
      content: (
        <>
          <h4>Your Data Downloaded Successfully!</h4>
          <p>Do you want to start a new application?</p>
        </>
      ),
      onOk: onReset
    });
  };

  const Title = () => (
    <div className="flex align-center gap-10">
      <FaCircleExclamation color="#1677ff" size={24} />
      Download
    </div>
  );

  return (
    <Modal
      title={<Title />}
      open={true}
      cancelText="Text"
      okText="JSON"
      closable={false}
      onCancel={() => onClickDownload('txt')}
      onOk={() => onClickDownload('json')}
      cancelButtonProps={{
        shape: 'round',
        type: 'primary'
      }}
      okButtonProps={{
        shape: 'round'
      }}
    >
      <div>
        <p>Please choose your preferred file format</p>
      </div>
      {contextHolder}
    </Modal>
  )
}

export default DownloadOption;
