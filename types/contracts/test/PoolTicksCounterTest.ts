/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface PoolTicksCounterTestInterface extends utils.Interface {
  functions: {
    "countInitializedTicksCrossed(address,int24,int24)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "countInitializedTicksCrossed"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "countInitializedTicksCrossed",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "countInitializedTicksCrossed",
    data: BytesLike
  ): Result;

  events: {};
}

export interface PoolTicksCounterTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PoolTicksCounterTestInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    countInitializedTicksCrossed(
      pool: PromiseOrValue<string>,
      tickBefore: PromiseOrValue<BigNumberish>,
      tickAfter: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number] & { initializedTicksCrossed: number }>;
  };

  countInitializedTicksCrossed(
    pool: PromiseOrValue<string>,
    tickBefore: PromiseOrValue<BigNumberish>,
    tickAfter: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  callStatic: {
    countInitializedTicksCrossed(
      pool: PromiseOrValue<string>,
      tickBefore: PromiseOrValue<BigNumberish>,
      tickAfter: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;
  };

  filters: {};

  estimateGas: {
    countInitializedTicksCrossed(
      pool: PromiseOrValue<string>,
      tickBefore: PromiseOrValue<BigNumberish>,
      tickAfter: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    countInitializedTicksCrossed(
      pool: PromiseOrValue<string>,
      tickBefore: PromiseOrValue<BigNumberish>,
      tickAfter: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
