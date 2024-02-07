
export const CardItem = ({ info }: any) => {
    const date = new Date(info.createdDate).toLocaleDateString("ru-RU", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "10px",
                    border: "1px solid black",
                    padding: "10px",
                    borderRadius: "10px",
                }}
            >
                <span style={{ fontWeight: "bold", paddingBottom: "10px" }}>
                    {info.description}
                </span>
                <span style={{ paddingBottom: "5px" }}>
                    {info.amount} {info.currency}
                </span>
                <span style={{ padding: "10px, 0" }}>{date}</span>
                <span>{info.state}</span>
            </div>
        </>
    );
};
