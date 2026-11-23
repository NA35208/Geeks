import React, { Component } from 'react';

class ColumnLeft extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  getImages = () => {
    this.setState({
      images: [
        { id: 1, url: 'https://picsum.photos/200/150?random=1', alt: 'Random image 1' },
        { id: 2, url: 'https://picsum.photos/200/150?random=2', alt: 'Random image 2' },
      ],
    });
  };

  render() {
    return (
      <div
        style={{
          flex: 1,
          padding: '20px',
          background: '#f8fafc',
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
        }}
      >
        <h3>Left Column</h3>
        <button
          onClick={this.getImages}
          style={{
            padding: '8px 16px',
            background: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            marginBottom: '16px',
          }}
        >
          Get Images
        </button>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {this.state.images.map((img) => (
            <img
              key={img.id}
              src={img.url}
              alt={img.alt}
              style={{ width: '200px', height: '150px', objectFit: 'cover', borderRadius: '4px' }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ColumnLeft;
