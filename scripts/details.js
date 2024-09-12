document.addEventListener('DOMContentLoaded', function() {
  const pieChart = document.querySelector('.pie-chart');
  const legendItems = document.querySelectorAll('.legend-item');
  const tooltip = document.createElement('div');
  
  tooltip.className = 'tooltip';
  document.body.appendChild(tooltip);

  pieChart.addEventListener('mousemove', function(event) {
    const rect = pieChart.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const radius = pieChart.clientWidth / 2;
    const centerX = radius;
    const centerY = radius;
    const angle = Math.atan2(y - centerY, x - centerX) + Math.PI;

    const percentage = (angle / (2 * Math.PI)) * 100;

    if (percentage >= 0 && percentage < 10) {
      showTooltip(legendItems[0].textContent, event); // Treasury wallet
    } else if (percentage >= 10 && percentage < 20) {
      showTooltip(legendItems[1].textContent, event); // Development and Marketing
    } else if (percentage >= 20 && percentage < 25) {
      showTooltip(legendItems[2].textContent, event); // Charity and Donations
    } else if (percentage >= 25 && percentage < 40) {
      showTooltip(legendItems[3].textContent, event); // Liquidity Pool
    } else if (percentage >= 40 && percentage < 50) {
      showTooltip(legendItems[4].textContent, event); // Team Allocation
    } else if (percentage >= 50) {
      showTooltip(legendItems[5].textContent, event); // Ecosystem Growth
    } else {
      hideTooltip();
    }
  });

  pieChart.addEventListener('mouseleave', function() {
    hideTooltip();
  });

  function showTooltip(text, event) {
    tooltip.textContent = text;
    tooltip.style.left = `${event.pageX + 10}px`;
    tooltip.style.top = `${event.pageY + 10}px`;
    tooltip.style.opacity = '1';
  }

  function hideTooltip() {
    tooltip.style.opacity = '0';
  }
});
