import React, { Component } from 'react';

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const pad = (n) => String(n).padStart(2, '0');

class Clock extends Component {
  constructor(props) {
    super(props);
    const now = new Date();
    this.state = {
      year: now.getFullYear(),
      month: now.getMonth(),
      dayOfWeek: now.getDay(),
      dayOfMonth: now.getDate(),
      hour: now.getHours(),
      minute: now.getMinutes(),
      second: now.getSeconds(),
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
    const { year, month, dayOfWeek, dayOfMonth, hour, minute, second } = this.state;

    const makePoint = (label, value, angle, color = '#38bdf8') => {
      const rad = (angle - 90) * Math.PI / 180;
      const r = 110;
      const x = 150 + r * Math.cos(rad);
      const y = 150 + r * Math.sin(rad);
      return (
        <div
          key={label}
          style={{
            position: 'absolute',
            left: x,
            top: y,
            transform: 'translate(-50%,-50%)',
            textAlign: 'center',
            color,
            fontWeight: 'bold',
          }}
        >
          <div style={{ fontSize: '11px', opacity: 0.7 }}>{label}</div>
          <div style={{ fontSize: '16px' }}>{value}</div>
        </div>
      );
    };

    return (
      <div
        style={{
          fontFamily: 'monospace',
          background: '#0f172a',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: '20px', left: '20px', fontSize: '18px', color: '#94a3b8', fontWeight: 'bold' }}>
          {year}
        </div>
        <div style={{ position: 'absolute', bottom: '20px', right: '20px', fontSize: '18px', color: '#94a3b8', fontWeight: 'bold' }}>
          {MONTHS[month]}
        </div>

        <h2 style={{ marginBottom: '30px', color: '#38bdf8' }}>Day 7 React Clock</h2>

        <div
          style={{
            position: 'relative',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            border: '4px solid #334155',
            background: '#1e293b',
            margin: '0 auto',
          }}
        >
          {makePoint('Hour', pad(hour), 0)}
          {makePoint('Min', pad(minute), 90)}
          {makePoint('Sec', pad(second), 180, '#f59e0b')}
          {makePoint('Day', DAYS[dayOfWeek].slice(0, 3), 270, '#a78bfa')}

          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '14px', color: '#94a3b8' }}>{DAYS[dayOfWeek]}</div>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#38bdf8' }}>{dayOfMonth}</div>
          </div>
        </div>

        <div style={{ marginTop: '30px', fontSize: '24px', letterSpacing: '4px' }}>
          {pad(hour)}:{pad(minute)}:{pad(second)}
        </div>
        <div style={{ marginTop: '8px', fontSize: '16px', color: '#94a3b8' }}>
          {DAYS[dayOfWeek]}, {MONTHS[month]} {dayOfMonth}, {year}
        </div>
      </div>
    );
  }
}

export default Clock;
