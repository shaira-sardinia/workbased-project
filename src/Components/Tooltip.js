import React, { useEffect } from "react";
import * as bootstrap from "bootstrap";

const Tooltip = ({ tooltiptext }) => {
  useEffect(() => {
    // Manually initializing bootstrap tooltips
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );

    return () => {
      tooltipList.forEach((tooltip) => tooltip.dispose());
    };
  }, []);

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        image-rendering="optimizeQuality"
        fill-rule="evenodd"
        clip-rule="evenodd"
        viewBox="0 0 0.442 0.442"
        width="16"
        height="16"
        className="tooltip-svg"
        data-bs-toggle="tooltip"
        data-bs-title={tooltiptext}
        data-bs-custom-class="custom-tooltip"
        data-bs-placement="right"
      >
        {/* Your SVG content here */}
        <path
          fill-rule="nonzero"
          d="M0.219 0a0.219 0.219 0 0 1 0.155 0.064 0.219 0.219 0 0 1 0.064 0.155c0 0.061 -0.025 0.115 -0.064 0.155s-0.095 0.064 -0.155 0.064a0.219 0.219 0 0 1 -0.155 -0.064A0.219 0.219 0 0 1 0 0.219a0.219 0.219 0 0 1 0.064 -0.155A0.219 0.219 0 0 1 0.219 0zm0.015 0.293h0.025v0.025H0.179v-0.025h0.025V0.214h-0.025v-0.025h0.055v0.104zm-0.024 -0.129a0.022 0.022 0 0 1 -0.016 -0.006 0.021 0.021 0 0 1 -0.006 -0.016 0.021 0.021 0 0 1 0.006 -0.016 0.021 0.021 0 0 1 0.016 -0.006 0.021 0.021 0 0 1 0.016 0.006 0.021 0.021 0 0 1 0.007 0.016 0.021 0.021 0 0 1 -0.003 0.011 0.023 0.023 0 0 1 -0.008 0.008 0.022 0.022 0 0 1 -0.011 0.003zm0.147 -0.084A0.195 0.195 0 0 0 0.219 0.023a0.195 0.195 0 0 0 -0.139 0.057 0.196 0.196 0 0 0 -0.057 0.139 0.195 0.195 0 0 0 0.057 0.139 0.195 0.195 0 0 0 0.139 0.057 0.195 0.195 0 0 0 0.139 -0.057 0.195 0.195 0 0 0 0.057 -0.139 0.196 0.196 0 0 0 -0.057 -0.139z"
        />
      </svg>
    </>
  );
};

export default Tooltip;
