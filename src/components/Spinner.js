const Spinner = (props)=> {
  const { infoMsg } = props;
        return (
            <div className="text-center">
                <h3> {infoMsg} </h3>
                <img className="my-3" src="/images/loading.gif" alt="loading" />
            </div>
        )
}

export default Spinner