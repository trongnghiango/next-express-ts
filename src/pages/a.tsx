import { useEffect } from 'react';

export default function A() {



  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(result => {
        console.log(result);
      });
  }, []);
  return <div>a</div>;
}
