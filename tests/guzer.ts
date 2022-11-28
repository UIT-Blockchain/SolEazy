import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Guzer } from "../target/types/guzer";

describe("guzer", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Guzer as Program<Guzer>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
