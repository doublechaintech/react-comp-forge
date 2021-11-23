export default function EleUserName(props) {
  const { value, data: record } = props;
  return (
    <div className='my-renderer'>
      <img alt='' src='https://d1yk6z6emsz7qy.cloudfront.net/static/images/loading.gif' width={30} height={30} />
      <span style={{ fontWeight: '800', color: record.sex === '男' ? '#0080FF' : 'pink' }}>{value}</span>
    </div>
  );
}
