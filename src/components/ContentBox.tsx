import styled from "@emotion/styled";
interface Props {
  children?: React.ReactNode;
  title?: string;
  iconButton?: React.ReactNode;
}
function ContentBox({
  children,
  title,
  iconButton,
}: Props) {
  return (
    <Wrapper>
      {title && (<ContentBoxHeader>
        <ContentBoxTitle>{title}</ContentBoxTitle>
        {iconButton && (
          <ContentBoxButton>
            {iconButton}
          </ContentBoxButton>
        )}
      </ContentBoxHeader>)}
      <ContentBoxMain>{children}</ContentBoxMain>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  border-radius: 10px;
  line-height: 3em;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(224, 224, 224);
  flex: 1;
`;

const ContentBoxTitle = styled.div`
  font-size: 18px;
  font-weight: 800;
`;

const ContentBoxButton = styled.div`
  margin-left: auto;
  margin-right: 0;
  color: rgb(224, 224, 224);
`;

const ContentBoxHeader = styled.div`
  display: flex;
  padding: 0 1rem;
  height: 54px;
`;

const ContentBoxMain = styled.div`
  display: flex;
  flex: 1;
`;

export default ContentBox;