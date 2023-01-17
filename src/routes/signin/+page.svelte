<script>
  import RegularCard from "$lib/components/modules/card_regular.svelte"
</script>

<RegularCard>
  <div class="flex flex-col gap-2">
    <div>
      <h2 class="text-lg font-bold">Login to your Account</h2>
      <p class="text-xs">No account yet? <a href="/" class="text-linkpurple hover:text-linkpurplehov transition hover:underline">Get one here!</a></p>
    </div>

    <a href="/" class="flex items-center gap-2 bg-xivgray-transparent rounded-lg py-2 px-4 ring-1 ring-white/10 backdrop-blur hover:bg-[rgba(122,59,222,0.2)] transition cursor-pointer">
      <img class="w-4 h-4 overflow-hidden bg-white" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg" alt="google login">
      <span>Login with Google</span>
    </a>

    <a href="/" class="flex items-center gap-2 bg-xivgray-transparent rounded-lg py-2 px-4 ring-1 ring-white/10 backdrop-blur hover:bg-[rgba(122,59,222,0.2)] transition cursor-pointer">
      <img class="w-4 h-4 overflow-hidden bg-white" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg3.svg" alt="google login">
      <span>Login with Discord</span>
    </a>

    <a href="/" class="flex items-center gap-2 bg-xivgray-transparent rounded-lg py-2 px-4 ring-1 ring-white/10 backdrop-blur hover:bg-[rgba(122,59,222,0.2)] transition cursor-pointer">
      <img class="w-4 h-4 overflow-hidden bg-white" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg4.svg" alt="google login">
      <span>Login with Twitter</span>
    </a>
    <div class="w-full flex items-center justify-between my-3">
      <hr class="w-full bg-gray-400">
      <p class="text-base font-medium leading-4 px-2.5 text-gray-400"> or </p>
      <hr class="w-full bg-gray-400  ">
    </div>
    <form action="" class="flex flex-col gap-1">
      <label for="mail">E-Mail</label>
      <input type="text" name="mail" id="mail">
      <label for="passwd">Password</label>
      <input type="password" name="passwd" id="passwd">
      <div>
        <input type="checkbox" name="rmbrme" id="rmbrme">
        <label for="rmbrme">Remember me</label>
      </div>
      <button type="submit" class="bg-darkpurple rounded-lg py-1">Login</button>
    </form>
  </div>
</RegularCard>