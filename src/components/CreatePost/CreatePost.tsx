import React, { useState } from 'react';
import './CreatePost.scss';
import { FiX } from 'react-icons/fi';
import { FiImage } from 'react-icons/fi';

type Props = {
  onClose: any;
};
function CreatePost({ onClose }: Props) {
  const [image, setImage] = React.useState<any>('');
  const [values, setValues] = useState({
    title: '',
    description: '',
  });

  const handleChange = (name: string) => (event: any) => {
    let value;
    if (name === 'image') {
      value = event.target.files[0];
      uploadImage(value);
    } else {
      value = event.target.value;
    }
    setValues({ ...values, [name]: value });
  };

  const uploadImage = (imageFile: any) => {
    const reader = new FileReader();
    reader.addEventListener('load', (e) => {
      setImage(e.target?.result);
    });
    reader.readAsDataURL(imageFile);
  };

  const onSubmit = () => {
    //Todo: make api call to save data
    //reset field values
    setValues({ title: '', description: '' });
    setImage('');
    onClose();
  };

  return (
    <div className={'CreatePost'}>
      <span
        className={'close-button'}
        onClick={() => {
          onClose();
        }}
        role={'button'}
      >
        {' '}
        <FiX />{' '}
      </span>
      <h5>Create New Post </h5>
      <input
        value={values.title}
        onChange={handleChange('title')}
        placeholder={'title'}
      />
      <textarea
        value={values.description}
        rows={4}
        onChange={handleChange('description')}
        placeholder={'description'}
      />
      <div className={'image-input'}>
        {image && <img className="mx-auto" src={image} alt="" />}
        <div>
          <input
            accept="image/*"
            onChange={handleChange('image')}
            className="add_image_button"
            id="add_image_button"
            type="file"
          />
          <label htmlFor="add_image_button">
            <FiImage />
            <span className="ml-2">{image ? 'Edit' : 'Add Image'}</span>
          </label>
        </div>
      </div>
      <button onClick={() => onSubmit()}>Publish</button>
    </div>
  );
}

export default CreatePost;
