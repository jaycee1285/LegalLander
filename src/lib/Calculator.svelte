<script>
  let hoursInMeetings = 25;
  let peoplePerMeeting = 10;
  let estimatedW2Rate = 40;
  
  let peopleHours = (hoursInMeetings * peoplePerMeeting).toFixed(2);
  let bottomLine = (peopleHours * estimatedW2Rate).toFixed(2);

  function calculate() {
      peopleHours = (hoursInMeetings * peoplePerMeeting).toFixed(2);
      bottomLine = (peopleHours * estimatedW2Rate).toFixed(2);
  }
</script>

<div class="min-h-screen bg-base-100 flex flex-col items-center justify-center outline-secondary p-4">
  <div class="prose text-center mb-8">
      <h1>How Expensive Are Your Meetings?</h1>
      <p class="font-overpass text-xl">Let's add up how much it costs you to keep your current meeting schedule.</p>
  </div>
  <div class="flex flex-col lg:flex-row w-full max-w-4xl items-center bg-base-100 rounded-lg shadow-xl p-4">
      <div class="w-full lg:w-1/2 p-4">
          <div class="form-control">
              <label class="label">
                  <span class="label-text">Average # of hours in meetings</span>
              </label>
              <input type="range" min="0" max="50" step="1" bind:value={hoursInMeetings} on:input={calculate} class="range range-primary" />
              <div class="flex justify-between text-xs px-2">
                  <span>0</span>
                  <span>{hoursInMeetings}</span>
                  <span>50</span>
              </div>
          </div>
          <div class="form-control mt-4">
              <label class="label">
                  <span class="label-text">Average # of people per meeting</span>
              </label>
              <input type="range" min="1" max="50" step="1" bind:value={peoplePerMeeting} on:input={calculate} class="range range-primary" />
              <div class="flex justify-between text-xs px-2">
                  <span>1</span>
                  <span>{peoplePerMeeting}</span>
                  <span>50</span>
              </div>
          </div>
          <div class="form-control mt-4">
              <label class="label">
                  <span class="label-text">Estimated W2 rate ($)</span>
              </label>
              <input type="range" min="20" max="60" step="5" bind:value={estimatedW2Rate} on:input={calculate} class="range range-primary" />
              <div class="flex justify-between text-xs px-2">
                  <span>20</span>
                  <span>{estimatedW2Rate}</span>
                  <span>60</span>
              </div>
          </div>
      </div>
      <div class="w-full lg:w-1/2 p-4 text-right">
          <div class="stat">
              <div class="stat-title">People hours</div>
              <div class="stat-value text-secondary">{peopleHours}</div>
          </div>
          <div class="stat mt-4">
              <div class="stat-title">Bottom Line</div>
              <div class="stat-value text-secondary">${bottomLine}</div>
          </div>
          <button class="btn btn-primary mt-8">It's Time for a New Meeting Strategy</button>
      </div>
  </div>
</div>

<style>
  .font-overpass { font-family: 'Overpass', sans-serif; }
</style>
