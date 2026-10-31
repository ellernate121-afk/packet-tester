const form = document.getElementById('testForm');
const runTestBtn = document.getElementById('runTestBtn');

const latencyValue = document.getElementById('latencyValue');
const lossValue = document.getElementById('lossValue');
const throughputValue = document.getElementById('throughputValue');

const tableLatency = document.getElementById('tableLatency');
const tableLoss = document.getElementById('tableLoss');
const tableRoundTrip = document.getElementById('tableRoundTrip');
const tableErrors = document.getElementById('tableErrors');

function createTestResult() {
  const packetSize = Number(document.getElementById('sizeInput').value) || 1200;
  const interval = Number(document.getElementById('intervalInput').value) || 250;
  const host = document.getElementById('hostInput').value || 'api.packet.test';
  const protocol = document.getElementById('protocolInput').value || 'TCP';

  const latency = (Math.random() * 4 + 1.2).toFixed(2);
  const loss = (Math.random() * 0.2).toFixed(2);
  const throughput = (Math.random() * 4 + 5).toFixed(1);
  const roundTrip = (Number(latency) * 6.6 + Math.random() * 5).toFixed(1);
  const errors = Math.floor(Math.random() * 3);

  return {
    host,
    protocol,
    packetSize,
    interval,
    latency,
    loss,
    throughput,
    roundTrip,
    errors,
  };
}

function updateMetrics(result) {
  latencyValue.textContent = `${result.latency}ms`;
  lossValue.textContent = `${result.loss}%`;
  throughputValue.textContent = `${result.throughput} Gbps`;

  tableLatency.textContent = `${result.latency} ms`;
  tableLoss.textContent = `${result.loss}%`;
  tableRoundTrip.textContent = `${result.roundTrip} ms`;
  tableErrors.textContent = result.errors;
}

function runPacketTest() {
  const result = createTestResult();
  updateMetrics(result);

  const heading = document.querySelector('.hero-copy h1');
  heading.textContent = `Measure ${result.host} in real time.`;
}

runTestBtn.addEventListener('click', runPacketTest);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  runPacketTest();
});

updateMetrics(createTestResult());
