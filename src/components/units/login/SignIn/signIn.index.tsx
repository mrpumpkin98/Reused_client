import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import { useMutation } from "@apollo/client";
import * as B from "./signIn.styles";
import Input01 from "../../../../commons/inputs/01-SignIn-top";
import Input02 from "../../../../commons/inputs/02-SignIn-under";
import Button01 from "../../../../commons/buttons/01-SignIn";
import { wrapFormAsync } from "../../../../commons/libraries/asyncFunc";
import { LOGIN_USER } from "../../../../commons/hooks/mutations/UseMutationLoginUser";
import { Modal } from "antd";

export const schema = yup.object({});

interface IData {
  email: string;
  password: string;
}

export default function LoginNewPage(): JSX.Element {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [loginUser] = useMutation(LOGIN_USER);
  const { register, handleSubmit } = useForm<IData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickLogo = (): void => {
    void router.push("/Board");
  };

  const onClickLogin = async (data: IData): Promise<void> => {
    try {
      const result = await loginUser({
        variables: { email: data.email, password: data.password },
      });

      const accessToken = result.data?.loginUser.accessToken;

      if (accessToken === undefined) {
        Modal.warning({
          title: "알림",
          content: "로그인에 실패했습니다! 다시 시도해 주세요!",
        });
        return;
      }
      setAccessToken(accessToken);
      Modal.success({
        title: "알림",
        content: "로그인에 성공했습니다!",
      });
      localStorage.setItem("accessToken", accessToken);
      router.push("/Market");
    } catch (error) {
      if (error instanceof Error)
        Modal.warning({
          title: "알림",
          content: "로그인에 실패했습니다! 다시 시도해 주세요!",
        });
    }
  };

  return (
    <>
      <B.Wrapper>
        <B.Logo src="/images/icons/로고.png" onClick={onClickLogo} />
        <B.Form onSubmit={wrapFormAsync(handleSubmit(onClickLogin))}>
          <B.LoginWrapper>
            <B.LoginBox>
              <Input01
                title="이메일을 입력해주세요."
                register={register("email")}
              ></Input01>
              <Input02
                title="비밀번호를 입력해 주세요."
                type="password"
                register={register("password")}
              ></Input02>
            </B.LoginBox>
            <Button01 title="로그인" />
          </B.LoginWrapper>
        </B.Form>
      </B.Wrapper>
    </>
  );
}
