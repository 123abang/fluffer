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

    if (percentage >= 0 && percentage < 45) {
      showTooltip(legendItems[0].textContent, event); // DEX Liquidity Pool
    } else if (percentage >= 45 && percentage < 65) {
      showTooltip(legendItems[1].textContent, event); // CEX Liquidity
    } else if (percentage >= 65 && percentage < 72) {
      showTooltip(legendItems[2].textContent, event); // Team Allocation
    } else if (percentage >= 72 && percentage < 79) {
      showTooltip(legendItems[3].textContent, event); // Community (Airdrops/Contests)
    } else if (percentage >= 79 && percentage < 86) {
      showTooltip(legendItems[4].textContent, event); // Marketing
    } else if (percentage >= 86 && percentage < 93) {
      showTooltip(legendItems[5].textContent, event); // Treasury Wallet
    } else if (percentage >= 93 && percentage < 100) {
      showTooltip(legendItems[6].textContent, event); // Charity
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
