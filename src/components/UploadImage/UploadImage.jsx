import {Upload, message} from 'antd';
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons';
import React from "react";

function getBase64(img, callback) {
  const reader = new FileReader();

  reader.addEventListener('load', event => {
    let picFile = event.target
    let imgNew = new Image()

    imgNew.addEventListener('load', () => {

      if (
        imgNew.naturalHeight < 200 ||
        imgNew.naturalHeight > 4000 ||
        imgNew.naturalWidth < 200 ||
        imgNew.naturalWidth > 4000
      ) {
        message.error('Image must min 200px/200px and max 4000px/4000px');
        callback(null)
        return;
      }

      callback(reader.result)
    })

    imgNew.src = picFile.result
  })

  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

class UploadImage extends React.Component {
  state = {
    loading: false,
    photo: this.props.photo || null
  };

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({loading: true, photo: this.state.photo});
      return;
    }
    if (info.file.status === 'error') {
      message.error('Error loading!')
      this.setState({loading: false, photo: this.state.photo});
      return;
    }

    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, url => {
          this.setState({
            photo: {
              url
            },
            loading: false,
          });

          this.props.onChange({type: info.file.type, url});
        }
      );

    }
  };

  render() {
    const {loading, photo} = this.state;

    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined/> : <PlusOutlined/>}
        <div style={{marginTop: 8}}>Upload</div>
      </div>
    );
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
        accept="image/jpeg,image/png"
      >
        {photo?.url ? <img src={photo.url} alt="avatar" style={{width: '100%'}}/> : uploadButton}
      </Upload>
    );
  }
}

export default UploadImage;
