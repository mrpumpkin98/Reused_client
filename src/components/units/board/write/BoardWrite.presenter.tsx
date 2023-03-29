import {
  Address,
  ButtonWrapper,
  Contents,
  ImageWrapper,
  InputWrapper,
  Label,
  OptionWrapper,
  Password,
  RadioButton,
  RadioLabel,
  SearchButton,
  Subject,
  SubmitButton,
  Title,
  UploadButton,
  CancelButton,
  Wrapper,
  Writer,
  WriterWrapper,
  Youtube,
  Zipcode,
  ZipcodeWrapper,
  Error,
  AddressModal,
  AddressSearchInput,
} from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./Boardwrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <div>
      {props.isOpen && (
        <AddressModal visible={true} onOk={props.Ok} onCancel={props.Cancel}>
          <AddressSearchInput onComplete={props.onCompleteAddressSearch} />
        </AddressModal>
      )}
      <Wrapper>
        <Title>{props.isEdit ? "수정글" : "게시글"} 등록</Title>
        <WriterWrapper>
          <InputWrapper>
            <Label>작성자</Label>
            <Writer
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeWriter}
              value={props.data?.fetchBoard.writer}
              readOnly={props.data?.fetchBoard.writer}
              ref={props.inputRef}
            />
            <Error>{props.writerError}</Error>
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Password
              type="password"
              placeholder="비밀번호를 작성해주세요."
              onChange={props.onChangePassword}
            />
            <Error>{props.passwordError}</Error>
          </InputWrapper>
        </WriterWrapper>
        <InputWrapper>
          <Label>제목</Label>
          <Subject
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard.title}
          />
          <Error>{props.titleError}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <Contents
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
          />
          <Error>{props.contentsError}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>주소</Label>
          <ZipcodeWrapper>
            <Zipcode
              placeholder="07250"
              readOnly
              value={
                props.zipcode !== ""
                  ? props.zipcode
                  : props.data?.fetchBoard.boardAddress?.zipcode ?? ""
              }
            />
            <SearchButton onClick={props.onClickAddressSearch}>
              우편번호 검색
            </SearchButton>
          </ZipcodeWrapper>
          <Address
            readOnly
            value={
              props.address !== ""
                ? props.address
                : props.data?.fetchBoard.boardAddress?.address ?? ""
            }
          />
          <Address
            onChange={props.onChangeAddressDetail}
            defaultValue={
              props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
            }
          />
        </InputWrapper>
        <InputWrapper>
          <Label>유튜브</Label>
          <Youtube placeholder="링크를 복사해주세요." />
        </InputWrapper>
        <ImageWrapper>
          <Label>사진첨부</Label>
          <UploadButton>+</UploadButton>
          <UploadButton>+</UploadButton>
          <UploadButton>+</UploadButton>
        </ImageWrapper>
        <OptionWrapper>
          <Label>메인설정</Label>
          <RadioButton type="radio" id="youtube" name="radio-button" />
          <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
          <RadioButton type="radio" id="image" name="radio-button" />
          <RadioLabel htmlFor="image">사진</RadioLabel>
        </OptionWrapper>
        <ButtonWrapper>
          <SubmitButton
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            Active={props.isEdit ? true : props.Active}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </SubmitButton>
          <CancelButton onClick={props.onClickCancel}>취소하기</CancelButton>
        </ButtonWrapper>
      </Wrapper>
    </div>
  );
}