// === EDIT THESE ===
const MINT = "PASTE_MINT_ADDRESS_HERE";

// Put links after launch (pump/jupiter/birdeye). Keep "#" if not ready.
const LINKS = {
  pump: "#",     // example: "https://pump.fun/coin/....."
  jupiter: "#",  // example: "https://jup.ag/swap/SOL-" + MINT
  birdeye: "#",  // example: "https://birdeye.so/token/" + MINT + "?chain=solana"
  tg: "#",       // example: "https://t.me/your_channel"
  x: "#",        // example: "https://x.com/your_handle"
};

// === DON'T TOUCH BELOW ===
const setHref = (id, href) => {
  const el = document.getElementById(id);
  if (el) el.href = href || "#";
};

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("mintText").textContent = MINT;

setHref("pumpLink", LINKS.pump);
setHref("jupiterLink", LINKS.jupiter);
setHref("birdeyeLink", LINKS.birdeye);
setHref("tgLink", LINKS.tg);
setHref("xLink", LINKS.x);

// Main CTA buttons point to pump (or Jupiter if you prefer)
setHref("buyBtn", LINKS.pump);
setHref("ctaBuyBtn", LINKS.pump);
setHref("chartBtn", LINKS.birdeye);

async function copyMint() {
  try {
    await navigator.clipboard.writeText(MINT);
    const status = document.getElementById("statusText");
    if (status) status.textContent = "Mint copied ✓";
    setTimeout(() => {
      if (status) status.textContent = "Live";
    }, 1200);
  } catch (e) {
    alert("Copy failed. Please copy manually: " + MINT);
  }
}

document.getElementById("copyMintBtn")?.addEventListener("click", copyMint);
document.getElementById("copyMintBtn2")?.addEventListener("click", copyMint);
