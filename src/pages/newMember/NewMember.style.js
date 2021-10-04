export default theme => ({
  chipMargin: {
    marginRight: '10px',
    marginBottom: '10px',
  },
  dialogContent: {
    padding: theme.spacing(4),
  },
  dialogContentSend: {
    padding: '0px!important',
  },

  button: {
    backgroundColor: '#5EBE84 !important',
    color: '#fff',
    borderRadius: 8,
    fontSize: 14,
  },
  closeIcon: {
    cursor: 'pointer',
    position: 'absolute',
    right: 28,
    top: 16,
    zIndex: 9999999,
  },
  dialogPaper: {
    width: '100%',
    position: 'relative',
  },
  dialogPaperSendEmails: {
    height: 502,
    width: 600,
  },

  renderedAttachment: {
    borderRadius: 8,
    border: 'solid 1px rgba(46, 53, 55, 0.1)',
    padding: 12,
    margin: '16px 0',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  renderedAttachmentContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropZoneContainer: {
    width: '100%',
    margin: '16px 0',
    backgroundColor: 'rgba(223, 231, 234, 0.2)',
    cursor: 'pointer',
  },
  dropZone: {
    height: '135px',
    width: '100%',
    border: 'dashed 1px rgba(46, 53, 55, 0.3)',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropZoneInvalid: {
    height: '135px',
    width: '100%',
    border: 'dashed 1px #f44336',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  attachmentNameAndSize: {
    marginLeft: '8px',
    marginRight: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  browseButton: {
    padding: '5px 25px',
    border: 'solid 1px #5EBE84',
    borderRadius: '6px',
    backgroundColor: 'rgba(94, 190, 132, 0.3)',
    color: '#5EBE84',
    fontSize: '11px',
    fontWeight: '600',
    '&:hover': {
      opacity: 0.8,
    },
  },
  attachedItemName: {
    marginBottom: 0,
    fontSize: '14px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
  },

  customFieldBackgroundImage: {
    width: '149px',
    height: '92px',
    borderRadius: '3px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  downloadAndZoomWrapper: {
    width: '100%',
    height: '100%',
    borderRadius: '3px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    transition: 'background-color 300ms ease-in-out',
    zIndex: 2,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    '&:hover $downloadAndZoom': {
      opacity: 1,
    },
    '&:hover + $removeImageIconWrapper': {
      opacity: 0,
    },
  },
  downloadAndZoom: {
    opacity: 0,
    width: '30px',
    height: '30px',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'opacity 300ms ease-in-out',
  },
  removeImageIconWrapper: {
    opacity: 1,
    transition: 'opacity 300ms ease-in-out',
    width: '24px',
    height: '24px',
    borderRadius: '12px',
    backgroundColor: '#fbeaed',
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
    cursor: 'pointer',
  },
  removeImageIcon: {
    width: '20px',
    height: '20px',
    color: '#dc354c',
  },

  membersContainer: {
    width: '1056px',
    marginTop: '24px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    marginBottom: '12px',
    borderRadius: '8px',
    boxShadow: '0 0 8px 2px rgba(0, 0, 0, 0.08)',
    backgroundColor: '#fff',
    overflow: 'scroll',
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '36px 40px',
    borderBottom: '1px solid rgba(46, 53, 55, 0.1)',
  },

  title: {
    color: '#2E3537',
    fontSize: '24px',
  },

  buttonsContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },

  mainButton: {
    fontSize: '14px',
    color: '#2E3537',
    width: '132px',
    height: '40px',
    backgroundColor: '#F2F5F9',
    '&:hover': {
      backgroundColor: '#F2F5F9',
      boxShadow: 'none',
    },
  },

  mainButtonGreen: {
    fontSize: '14px',
    color: '#fff',
    width: '132px',
    height: '40px',
    backgroundColor: '#79BC89',
    '&:hover': {
      backgroundColor: '#79BC89',
      boxShadow: 'none',
    },
  },

  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '60px',
    paddingBottom: '111px',
  },

  contentTitle: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '24px',
  },

  textField: {
    width: '100%',
    minWidth: '480px',
    marginBottom: 20,

    '& .Mui-focused': {
      color: '#2E3537',
    },

    '& .MuiOutlinedInput-input': {
      padding: '15.5px 14px',
    },

    '& .MuiInputLabel-outlined': {
      marginTop: -2,
    },
  },

  textFieldPhone: {
    width: '100%',
    minWidth: '480px',
    marginBottom: 20,

    '& .Mui-focused': {
      color: '#2E3537',
    },

    '& .MuiOutlinedInput-input': {
      padding: '14.5px 14px 15.5px 0',
    },
  },

  countriesContainerItemInput: {
    height: '36px',
    width: '100%',
    gap: '12px',
    display: 'flex',
    padding: '10px',
    alignItems: 'center',
    justifyContent: 'flex-start',
    cursor: 'pointer',
    boxSizing: 'border-box',
  },

  phoneNumContainer: {
    width: '100%',
    '& .MuiOutlinedInput-adornedStart': {
      paddingLeft: '7px',
    },
  },

  countryText: {
    fontSize: '16px',
    fontWeight: 'normal',
  },

  selectBox: {
    zIndex: '10',
    width: '480px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    padding: '8px',
    position: 'absolute',
    marginTop: '-15px',
    maxHeight: '250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '@media screen and (max-width: 1440px)': {
      maxHeight: '200px',
    },
  },

  selectSearch: {
    width: '100%',
    height: '40px',
    backgroundColor: '#F7F7FA',
    marginBottom: '12px',
    '& .MuiInputBase-root': {
      height: '40px',
    },
    '& .MuiOutlinedInput-input': {
      padding: '10px 15px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none !important',
    },
    '& .MuiSelect-select:focus': {
      backgroundColor: '#fff !important',
    },
  },

  countriesContainer: {
    overflow: 'scroll',
    width: '100%',
    margin: '12px 10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '5px',
  },

  countriesContainerItem: {
    height: '36px',
    width: '100%',
    display: 'flex',
    padding: '10px',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    boxSizing: 'border-box',
  },

  checkCircleStyles: {
    color: '#5EBE84',
    display: 'flex',
    alignItems: 'center',
  },
});
