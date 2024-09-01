<script>
    let numberOfLeads = 0;
    let leadCloseRate = 0;
    let averageCaseValue = 10000;
    
    let closedLeads = Math.round((numberOfLeads * leadCloseRate) / 100);
    let bottomLine = Math.round(closedLeads * averageCaseValue);
  
    function calculate() {
        closedLeads = Math.round((numberOfLeads * leadCloseRate) / 100);
        bottomLine = Math.round(closedLeads * averageCaseValue);
    }
  </script>
  
  <div class="min-h-60 bg-base-100 flex flex-col items-center justify-center outline-secondary p-4 mt-40 mb-40">
    <div class="text-center mb-8">
        <h1 class="font-rokkitt text-5xl" >The Impact of New Leads on Your Law Firm</h1>
        <p class="font-abhaya text-xl mt-8">Sometimes, words just get in the way. Let's look at what new leads could mean for you.</p>
    </div>
    <div class="flex flex-col lg:flex-row w-full max-w-4xl items-center bg-base-100 rounded-lg shadow-xl p-4">
        <div class="w-full lg:w-1/2 p-4">
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Number of Leads</span>
                </label>
                <input type="range" min="0" max="50" step="10" bind:value={numberOfLeads} on:input={calculate} class="range range-primary" />
                <div class="flex justify-between text-xs px-2">
                    <span>0</span>
                    <span class="text-xl font-rokkitt font-bold text-primary">{numberOfLeads}</span>
                    <span>50</span>
                </div>
            </div>
            <div class="form-control mt-4">
                <label class="label">
                    <span class="label-text">Lead Close Rate (%)</span>
                </label>
                <input type="range" min="0" max="50" step="10" bind:value={leadCloseRate} on:input={calculate} class="range range-primary" />
                <div class="flex justify-between text-xs px-2">
                    <span>0%</span>
                    <span class="text-xl font-bold text-primary">{leadCloseRate}%</span>
                    <span>50%</span>
                </div>
            </div>
            <div class="form-control mt-4">
                <label class="label">
                    <span class="label-text">Average Case Value ($)</span>
                </label>
                <input type="range" min="10000" max="100000" step="10000" bind:value={averageCaseValue} on:input={calculate} class="range range-primary" />
                <div class="flex justify-between text-xs px-2">
                    <span>$10,000</span>
                    <span class="text-xl font-bold text-primary">${averageCaseValue}</span>
                    <span>$100,000</span>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-1/2 p-4 text-right text-primary font-rokkitt">
            <div class="stat">
                <div class="stat-title">Closed Leads</div>
                <div class="stat-value text-secondary">{closedLeads}</div>
            </div>
            <div class="stat mt-4">
                <div class="stat-title">Bottom Line</div>
                <div class="stat-value text-accent">${bottomLine}</div>
            </div>
            <button class="btn btn-primary mt-8 text-base-100 font-abhaya">Get More Leads</button>
        </div>
    </div>
  </div>
  