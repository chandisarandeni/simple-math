import cliProgress from 'cli-progress';

function showProgressBar(total = 100, speed = 30, callback = () => {}) {
  const bar = new cliProgress.SingleBar({
    format: 'Loading |{bar}| {percentage}%',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true
  });

  let value = 0;
  bar.start(total, 0);

  const interval = setInterval(() => {
    value++;
    bar.update(value);
 
    if (value >= total) {
      clearInterval(interval);
      bar.stop();
      callback();
    }
  }, speed);
}

export default showProgressBar;
