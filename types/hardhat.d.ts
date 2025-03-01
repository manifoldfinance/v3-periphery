/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Permit__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "IUniswapV2Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Pair__factory>;
    getContractFactory(
      name: "IUniswapV3FlashCallback",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3FlashCallback__factory>;
    getContractFactory(
      name: "IUniswapV3MintCallback",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3MintCallback__factory>;
    getContractFactory(
      name: "IUniswapV3SwapCallback",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3SwapCallback__factory>;
    getContractFactory(
      name: "IUniswapV3Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3Factory__factory>;
    getContractFactory(
      name: "IUniswapV3Pool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3Pool__factory>;
    getContractFactory(
      name: "IUniswapV3PoolActions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolActions__factory>;
    getContractFactory(
      name: "IUniswapV3PoolDerivedState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolDerivedState__factory>;
    getContractFactory(
      name: "IUniswapV3PoolEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolEvents__factory>;
    getContractFactory(
      name: "IUniswapV3PoolImmutables",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolImmutables__factory>;
    getContractFactory(
      name: "IUniswapV3PoolOwnerActions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolOwnerActions__factory>;
    getContractFactory(
      name: "IUniswapV3PoolState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolState__factory>;
    getContractFactory(
      name: "ERC721Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Permit__factory>;
    getContractFactory(
      name: "LiquidityManagement",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LiquidityManagement__factory>;
    getContractFactory(
      name: "Multicall",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Multicall__factory>;
    getContractFactory(
      name: "PeripheryImmutableState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PeripheryImmutableState__factory>;
    getContractFactory(
      name: "PeripheryPayments",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PeripheryPayments__factory>;
    getContractFactory(
      name: "PeripheryPaymentsWithFee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PeripheryPaymentsWithFee__factory>;
    getContractFactory(
      name: "PoolInitializer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PoolInitializer__factory>;
    getContractFactory(
      name: "SelfPermit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SelfPermit__factory>;
    getContractFactory(
      name: "PairFlash",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PairFlash__factory>;
    getContractFactory(
      name: "IERC1271",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1271__factory>;
    getContractFactory(
      name: "IERC20PermitAllowed",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20PermitAllowed__factory>;
    getContractFactory(
      name: "IWETH9",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWETH9__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC721Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Permit__factory>;
    getContractFactory(
      name: "IMulticall",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMulticall__factory>;
    getContractFactory(
      name: "INonfungiblePositionManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INonfungiblePositionManager__factory>;
    getContractFactory(
      name: "INonfungibleTokenPositionDescriptor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INonfungibleTokenPositionDescriptor__factory>;
    getContractFactory(
      name: "IPeripheryImmutableState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPeripheryImmutableState__factory>;
    getContractFactory(
      name: "IPeripheryPayments",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPeripheryPayments__factory>;
    getContractFactory(
      name: "IPeripheryPaymentsWithFee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPeripheryPaymentsWithFee__factory>;
    getContractFactory(
      name: "IPoolInitializer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPoolInitializer__factory>;
    getContractFactory(
      name: "IQuoter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IQuoter__factory>;
    getContractFactory(
      name: "IQuoterV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IQuoterV2__factory>;
    getContractFactory(
      name: "ISelfPermit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISelfPermit__factory>;
    getContractFactory(
      name: "ISwapRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISwapRouter__factory>;
    getContractFactory(
      name: "ITickLens",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITickLens__factory>;
    getContractFactory(
      name: "IV3Migrator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IV3Migrator__factory>;
    getContractFactory(
      name: "Quoter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Quoter__factory>;
    getContractFactory(
      name: "QuoterV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.QuoterV2__factory>;
    getContractFactory(
      name: "TickLens",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TickLens__factory>;
    getContractFactory(
      name: "UniswapInterfaceMulticall",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapInterfaceMulticall__factory>;
    getContractFactory(
      name: "NFTDescriptor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NFTDescriptor__factory>;
    getContractFactory(
      name: "NonfungiblePositionManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NonfungiblePositionManager__factory>;
    getContractFactory(
      name: "NonfungibleTokenPositionDescriptor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NonfungibleTokenPositionDescriptor__factory>;
    getContractFactory(
      name: "SwapRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SwapRouter__factory>;
    getContractFactory(
      name: "Base64Test",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Base64Test__factory>;
    getContractFactory(
      name: "LiquidityAmountsTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LiquidityAmountsTest__factory>;
    getContractFactory(
      name: "MockObservable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockObservable__factory>;
    getContractFactory(
      name: "MockObservations",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockObservations__factory>;
    getContractFactory(
      name: "MockTimeNonfungiblePositionManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockTimeNonfungiblePositionManager__factory>;
    getContractFactory(
      name: "MockTimeSwapRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockTimeSwapRouter__factory>;
    getContractFactory(
      name: "NFTDescriptorTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NFTDescriptorTest__factory>;
    getContractFactory(
      name: "NonfungiblePositionManagerPositionsGasTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NonfungiblePositionManagerPositionsGasTest__factory>;
    getContractFactory(
      name: "OracleTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OracleTest__factory>;
    getContractFactory(
      name: "PathTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PathTest__factory>;
    getContractFactory(
      name: "PeripheryImmutableStateTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PeripheryImmutableStateTest__factory>;
    getContractFactory(
      name: "PoolAddressTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PoolAddressTest__factory>;
    getContractFactory(
      name: "PoolTicksCounterTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PoolTicksCounterTest__factory>;
    getContractFactory(
      name: "PositionValueTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PositionValueTest__factory>;
    getContractFactory(
      name: "SelfPermitTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SelfPermitTest__factory>;
    getContractFactory(
      name: "TestCallbackValidation",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestCallbackValidation__factory>;
    getContractFactory(
      name: "TestERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestERC20__factory>;
    getContractFactory(
      name: "TestERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestERC20Metadata__factory>;
    getContractFactory(
      name: "TestERC20PermitAllowed",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestERC20PermitAllowed__factory>;
    getContractFactory(
      name: "TestMulticall",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestMulticall__factory>;
    getContractFactory(
      name: "TestPositionNFTOwner",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestPositionNFTOwner__factory>;
    getContractFactory(
      name: "TestUniswapV3Callee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestUniswapV3Callee__factory>;
    getContractFactory(
      name: "TickLensTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TickLensTest__factory>;
    getContractFactory(
      name: "V3Migrator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.V3Migrator__factory>;

    getContractAt(
      name: "ERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Permit>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Enumerable>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "IUniswapV2Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Pair>;
    getContractAt(
      name: "IUniswapV3FlashCallback",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3FlashCallback>;
    getContractAt(
      name: "IUniswapV3MintCallback",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3MintCallback>;
    getContractAt(
      name: "IUniswapV3SwapCallback",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3SwapCallback>;
    getContractAt(
      name: "IUniswapV3Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3Factory>;
    getContractAt(
      name: "IUniswapV3Pool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3Pool>;
    getContractAt(
      name: "IUniswapV3PoolActions",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolActions>;
    getContractAt(
      name: "IUniswapV3PoolDerivedState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolDerivedState>;
    getContractAt(
      name: "IUniswapV3PoolEvents",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolEvents>;
    getContractAt(
      name: "IUniswapV3PoolImmutables",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolImmutables>;
    getContractAt(
      name: "IUniswapV3PoolOwnerActions",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolOwnerActions>;
    getContractAt(
      name: "IUniswapV3PoolState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolState>;
    getContractAt(
      name: "ERC721Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Permit>;
    getContractAt(
      name: "LiquidityManagement",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LiquidityManagement>;
    getContractAt(
      name: "Multicall",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Multicall>;
    getContractAt(
      name: "PeripheryImmutableState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PeripheryImmutableState>;
    getContractAt(
      name: "PeripheryPayments",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PeripheryPayments>;
    getContractAt(
      name: "PeripheryPaymentsWithFee",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PeripheryPaymentsWithFee>;
    getContractAt(
      name: "PoolInitializer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PoolInitializer>;
    getContractAt(
      name: "SelfPermit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SelfPermit>;
    getContractAt(
      name: "PairFlash",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PairFlash>;
    getContractAt(
      name: "IERC1271",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1271>;
    getContractAt(
      name: "IERC20PermitAllowed",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20PermitAllowed>;
    getContractAt(
      name: "IWETH9",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWETH9>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC721Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Permit>;
    getContractAt(
      name: "IMulticall",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMulticall>;
    getContractAt(
      name: "INonfungiblePositionManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INonfungiblePositionManager>;
    getContractAt(
      name: "INonfungibleTokenPositionDescriptor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INonfungibleTokenPositionDescriptor>;
    getContractAt(
      name: "IPeripheryImmutableState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPeripheryImmutableState>;
    getContractAt(
      name: "IPeripheryPayments",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPeripheryPayments>;
    getContractAt(
      name: "IPeripheryPaymentsWithFee",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPeripheryPaymentsWithFee>;
    getContractAt(
      name: "IPoolInitializer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPoolInitializer>;
    getContractAt(
      name: "IQuoter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IQuoter>;
    getContractAt(
      name: "IQuoterV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IQuoterV2>;
    getContractAt(
      name: "ISelfPermit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISelfPermit>;
    getContractAt(
      name: "ISwapRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISwapRouter>;
    getContractAt(
      name: "ITickLens",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITickLens>;
    getContractAt(
      name: "IV3Migrator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IV3Migrator>;
    getContractAt(
      name: "Quoter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Quoter>;
    getContractAt(
      name: "QuoterV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.QuoterV2>;
    getContractAt(
      name: "TickLens",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TickLens>;
    getContractAt(
      name: "UniswapInterfaceMulticall",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapInterfaceMulticall>;
    getContractAt(
      name: "NFTDescriptor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NFTDescriptor>;
    getContractAt(
      name: "NonfungiblePositionManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NonfungiblePositionManager>;
    getContractAt(
      name: "NonfungibleTokenPositionDescriptor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NonfungibleTokenPositionDescriptor>;
    getContractAt(
      name: "SwapRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SwapRouter>;
    getContractAt(
      name: "Base64Test",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Base64Test>;
    getContractAt(
      name: "LiquidityAmountsTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LiquidityAmountsTest>;
    getContractAt(
      name: "MockObservable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockObservable>;
    getContractAt(
      name: "MockObservations",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockObservations>;
    getContractAt(
      name: "MockTimeNonfungiblePositionManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockTimeNonfungiblePositionManager>;
    getContractAt(
      name: "MockTimeSwapRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockTimeSwapRouter>;
    getContractAt(
      name: "NFTDescriptorTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NFTDescriptorTest>;
    getContractAt(
      name: "NonfungiblePositionManagerPositionsGasTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NonfungiblePositionManagerPositionsGasTest>;
    getContractAt(
      name: "OracleTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OracleTest>;
    getContractAt(
      name: "PathTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PathTest>;
    getContractAt(
      name: "PeripheryImmutableStateTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PeripheryImmutableStateTest>;
    getContractAt(
      name: "PoolAddressTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PoolAddressTest>;
    getContractAt(
      name: "PoolTicksCounterTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PoolTicksCounterTest>;
    getContractAt(
      name: "PositionValueTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PositionValueTest>;
    getContractAt(
      name: "SelfPermitTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SelfPermitTest>;
    getContractAt(
      name: "TestCallbackValidation",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestCallbackValidation>;
    getContractAt(
      name: "TestERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestERC20>;
    getContractAt(
      name: "TestERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestERC20Metadata>;
    getContractAt(
      name: "TestERC20PermitAllowed",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestERC20PermitAllowed>;
    getContractAt(
      name: "TestMulticall",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestMulticall>;
    getContractAt(
      name: "TestPositionNFTOwner",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestPositionNFTOwner>;
    getContractAt(
      name: "TestUniswapV3Callee",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestUniswapV3Callee>;
    getContractAt(
      name: "TickLensTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TickLensTest>;
    getContractAt(
      name: "V3Migrator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.V3Migrator>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
