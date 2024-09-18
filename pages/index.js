import Casino from '@/components/Casino';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Home() {
  const mobile = useMediaQuery('(max-width:730px)');
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: mobile ? 'column' : 'row',
      }}>
      <Casino mobile={mobile} />
      <Box
        sx={{
          height: '120px',
          backgroundColor: 'purple',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '24px',
          color: 'white',
          fontWeight: '20px',
        }}>
        <p className='attribution'>Built and maintained with&nbsp;</p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='white'
          height='1.5em'
          viewBox='0 0 512 512'>
          <path d='M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z' />
        </svg>
        <p>&nbsp;by</p>
        <Box
          component='a'
          sx={{ textDecoration: 'none', color: 'white' }}
          className='attribution'
          href='https://github.com/mikebarberry'
          title="Mike's Github"
          target='_blank'>
          &nbsp;Mike Barberry
        </Box>
      </Box>
    </Box>
  );
}
