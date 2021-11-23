export default function EleSex(props) {
  const { value, data: record } = props;
  return (
    <div className='my-renderer' style={{ height: record.age * 3 }}>
      <span style={{ fontWeight: '800', color: value === '男' ? '#0080FF' : 'pink' }}>{value}</span>
    </div>
  );
}
