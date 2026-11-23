import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      dayOfWeek: new Date().getDay(),
      dayOfMonth: new Date().getDate(),
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      second: new Date().getSeconds(),
    };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const now = new Date();
      this.setState({
        year: now.getFullYear(),
        month: now.getMonth(),
        dayOfWeek: now.getDay(),
        dayOfMonth: now.getDate(),
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const { year, month, dayOfWeek, dayOfMonth, hour, minute, second } = this.state;

    // Pad numbers
    const pad = (n) => String(n).padStart(2, '0');

    // Compass-style: rotate labels around a circle
    const compassStyle = {
      position: 'relative',
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      border: '4px solid #334155',
      background: '#1e293b',
      margin: '0 auto',
    };

    const centerStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      color: 'white',
    };

    // Position text at compass points
    const makePoint = (label, value, angle, color='#38bdf8') => {
      const rad = (angle - 90) * Math.PI / 180;
      const r = 110;
      const x = 150 + r * Math.cos(rad);
      const y = 150 + r * Math.sin(rad);
      return (
        <div key={label} style={{
          position: 'absolute',
          left: x,
          top: y,
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color,
          fontWeight: 'bold',
        }}>
          <div style={{ fontSize: '11px', opacity: 0.7 }}>{label}</div>
          <div style={{ fontSize: '16px' }}>{value}</div>
        </div>
      );
    };

    return (
      <div style={{ fontFamily: 'monospace', background: '#0f172a', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
        <div style={{ position: 'absolute', top: '20px', left: '20px', fontSize: '18px', fontWeight: 'bold', color: '#94a3b8' }}>{year}</div>
        <div style={{ position: 'absolute', bottom: '20px', right: '20px', fontSize: '18px', fontWeight: 'bold', color: '#94a3b8' }}>{months[month]}</div>

        <h2 style={{ marginBottom: '30px', color: '#38bdf8' }}>React Clock</h2>

        <div style={compassStyle}>
          {makePoint('Hour', pad(hour), 0)}
          {makePoint('Min', pad(minute), 90)}
          {makePoint('Sec', pad(second), 180, '#f59e0b')}
          {makePoint('Day', days[dayOfWeek].slice(0,3), 270, '#a78bfa')}
          <div style={centerStyle}>
            <div style={{ fontSize: '14px', color: '#94a3b8' }}>{days[dayOfWeek]}</div>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#38bdf8' }}>{dayOfMonth}</div>
          </div>
        </div>

        <div style={{ marginTop: '30px', fontSize: '24px', letterSpacing: '4px', color: '#f1f5f9' }}>
          {pad(hour)}:{pad(minute)}:{pad(second)}
        </div>
        <div style={{ marginTop: '8px', fontSize: '16px', color: '#94a3b8' }}>
          {days[dayOfWeek]}, {months[month]} {dayOfMonth}, {year}
        </div>
      </div>
    );
  }
}

export default Clock;
